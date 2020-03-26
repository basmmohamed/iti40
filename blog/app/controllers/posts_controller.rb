class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    # @posts = Post.all
    @posts = Post.order(updated_at: :desc)
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    @post= Post.find(params[:id])
    @comments = Comment.where("post_id = #{@post.id}")

  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/1/edit
  def edit
    @post= Post.find(params[:id])
  end

  # POST /posts
  # POST /posts.json
  def create
    # @post = Post.new(post_params)
    @post = Post.new
    @post.title = params[:title]
    @post.content = params[:content]
    # p params
    @post.save
    # posts_params = params.permit(:title, :content)
    # @post = Post.Create(posts_params)
    # @post = User.find(1).posts.create[ posts_params ] # create will automatically call validators

    if @post.save
    redirect_to :posts
    else
    render :new
    end
    # respond_to do |format|
    #   if @post.save
    #     format.html { redirect_to @post, notice: 'Post was successfully created.' }
    #     format.json { render :show, status: :created, location: @post }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @post.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    @post= Post.find(params[:id])
    @post.update(post_params)
    if @post.save
      # @post = Post.create(post_params)
      redirect_to action: :index
    else
      render :edit
      end
    # respond_to do |format|
    #   if @post.update(post_params)
    #     format.html { redirect_to @post, notice: 'Post was successfully updated.' }
    #     format.json { render :show, status: :ok, location: @post }
    #   else
    #     format.html { render :edit }
    #     format.json { render json: @post.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post = Post.find(params[:id])

    @post.destroy
    redirect_to :posts
    # respond_to do |format|
    #   format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
    #   format.json { head :no_content }
    # end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :content)
    end
end
