import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  posts : any[] = [];
  loading: boolean = false;
  page=1;
  limit=10;
  errorMessage: string = '';

  private postService = inject(PostService);
  ngOnInit(): void {
     this.loadPosts();
  }

  handleError(error: any) {
    this.errorMessage = error.message || 'An error occurred while fetching posts.';
  }

  loadPosts() {
    this.loading = true;
    this.postService.getPosts(this.page, this.limit).subscribe({
      next: (posts) => {
        this.posts = [...this.posts, ...posts];
        this.loading = false;
      },
      error: (error) => {
        this.handleError(error);
        this.loading = false;
      }
    });
  }

@HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.page++;
      this.loadPosts();
    }
  }

}
