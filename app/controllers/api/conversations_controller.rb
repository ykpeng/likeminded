class Api::ConversationsController < ApplicationController
  def index
    @conversations = current_user.initiated_conversations +  current_user.received_conversations
    render 'api/conversations/index'
  end

  # def show
  #   @conversation = Conversation.find(params[:id])
  #   render 'api/conversations/show'
  # end

  def create
    @conversation = Conversation.new(conversation_params)
    if @conversation.save
      render 'api/conversations/show'
    else
      Rails.logger.info(@conversation.errors.inspect)
      render json: @conversation.errors, status: 422
    end
  end

  def destroy
    @conversation = Conversation.find(params[:id])
    @conversation.destroy! if @conversation
  end

  def conversation_params
    params.require(:conversation).permit(messages_attributes: [:sender_id, :receiver_id, :content])
  end
end
