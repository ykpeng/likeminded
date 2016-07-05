class Api::MessagesController < ApplicationController
  def index
    @messages = Message.find(conversation_id: params[:id])
    render 'api/messages/index'
  end

  def create
    @message = Message.new(message_params)
    @message.sender_id = current_user.id
    if !params[:id]
      @conversation = Conversation.create!
      @message.converation_id = @conversation.id
    else
      @message.conversation_id = params[:id]
    end

    if @message.save
      render 'api/messages/index'
    else
      render json: @message.errors, status: 422
    end
  end

  private
  def message_params
    params.require(:message).permit(:receiver_id, :content)
  end
end
