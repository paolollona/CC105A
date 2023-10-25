import { EventEmitter, Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfPosts: Post[] = [
    /*
      new Post("TechCrunch",
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/techcrunch-website-homepage-1024x542.webp",
        "TechCrunch is a blog that provides technology and startup news, from the latest developments in Silicon Valley to venture capital funding.",
        "Johnny Johnny",
        new Date,
        9
      ),
      new Post("Engadget",
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/the-verge-website-homepage.webp",
        "The Verge’s website homepage is vibrant – a black and white theme with bright accents of orange and magenta.",
        "Yes PAPA",
        new Date,
        8
      ),
      new Post("The Verge",
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/engadget-website-homepage.webp",
        "Launched by Peter Rojas, Engadget is a technology blog providing reviews of gadgets and consumer electronics as well as the latest news in the tech world.",
        "Eating Sugar",
        new Date,
        2
      ),
      */
  ];
  getPost() {
    return this.listOfPosts;
  }
  deleteButton(index: number) {
    this.listOfPosts.splice(index, 1)
  }
  addPost(post: Post) {
    this.listOfPosts.push(post);
  }
  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }
  getSpecPost(index: number) {
    return this.listOfPosts[index];
  }
  likePost(index: number) {
    this.listOfPosts[index].numberOfLikes++;
  }
  addComment(index: number, comment: string) {
    this.listOfPosts[index].comments.push(comment);
    // You might want to update the post on the server here
  }
  getComments(index: number) {
    return this.listOfPosts[index].comments;
  }
  setPosts(listOfPosts: Post[]) {
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts);
  }
}
