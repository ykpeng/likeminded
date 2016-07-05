class Api::ConversationsController < ApplicationController
  def index
    @conversations = current_user.initiated_conversations +  current_user.received_conversations
    render 'api/conversations/index'
  end

  # def show
  #   @conversation = Conversation.find(params[:id])
  #   render 'api/conversations/show'
  # end

  # def new
  #   @conversation = Conversation.new
  #   render 'api/conversations/new'
  # end
  def destroy
    @conversation = Conversation.find(params[:id])
    @conversation.destroy! if @conversation
  end
end
