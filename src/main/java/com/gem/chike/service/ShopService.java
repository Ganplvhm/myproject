package com.gem.chike.service;


import com.gem.chike.pojo.*;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface ShopService {
//    List<Shoppic> selectshoppic();

//    11.7 qy
    List<RoundPic> selectRoundTop();

    List<Posts> selectPostsTop();

    List<Posts> selectPostsTops();

    List<Poster> selectPoster();

    List<Shop> selectshop();

}
