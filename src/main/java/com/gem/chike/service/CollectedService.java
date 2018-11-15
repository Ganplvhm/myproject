package com.gem.chike.service;


import com.gem.chike.pojo.FashionerConcerned;
import com.gem.chike.pojo.PostsCollected;
import com.gem.chike.pojo.ShopCollected;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface CollectedService {


    void insertCollectedShop(int shopId,String userName,String shopName, String shopSimpleIntro, String shopPic);

    PageInfo<ShopCollected> getCollectedShop(int curPage,String userName);

    void insertCollectedPosts(int postid,String userName,String postname, String postssimpleintro, String postpic);

    PageInfo<PostsCollected> getCollectedPosts(int curPage, String userName);

    void insertCollectedPostse(int posterid,String userName, String postername, String posterintro, String posterpic);

    PageInfo<FashionerConcerned> getCollectedPoster(int curPage, String userName);

    List<PostsCollected> getCollectedPost(String userName);
}
