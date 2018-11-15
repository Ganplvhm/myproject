package com.gem.chike.mapper;

import com.gem.chike.pojo.FashionerConcerned;
import com.gem.chike.pojo.PostsCollected;
import com.gem.chike.pojo.ShopCollected;

import java.util.List;

public interface CollectedMapper {
    

    List<ShopCollected> selectCollectedShop(String userName);

    void insertCollectedShop(int shopId,String userName,String shopName,String shopSimpleIntro,String shopPic);

//    插入收藏的帖子
    void insertCollectedPosts(int postid,String userName,String postname,String postssimpleintro,String postpic);

//    查询收藏的帖子
    List<PostsCollected> selectCollectedPosts(String userName);
//插入关注的达人
    void insertConcernedFash();
//查询关注的达人
    List<FashionerConcerned> selectConcernedFashioner(String userName);

    int selectCollectedShopNum(String userName);

    int selectCollectedPostsNum(String userName);

    int selectConcernedFashionerNum(String userName);

    void insertCollectedPoster(int posterid,String userName, String postername, String posterintro, String posterpic);

}
