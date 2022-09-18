package com.myfcbclone.fcbclone.service;

import com.myfcbclone.fcbclone.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}
