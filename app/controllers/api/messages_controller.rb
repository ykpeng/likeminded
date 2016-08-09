class Api::MessagesController < ApplicationController
  def index
    @messages = Conversation.find(params[:conversation_id]).messages
    render 'api/messages/index'
  end

  def create
    @message = Message.new(message_params)
    @message.sender_id = current_user.id
    @message.conversation_id = params[:conversation_id]
    if @message.save
      #publish an event
      Pusher.trigger('conversation_' + @message.conversation_id.to_s, 'message_sent', {})
      render 'api/messages/show' #, include: :sender
    else
      render json: @message.errors, status: 422
    end
  end

  private
  def message_params
    params.require(:message).permit(:receiver_id, :content)
  end
end
