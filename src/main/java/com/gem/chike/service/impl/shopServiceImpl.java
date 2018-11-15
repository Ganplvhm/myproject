package com.gem.chike.service.impl;

import com.gem.chike.mapper.CollectedMapper;
import com.gem.chike.mapper.ShopMapper;
import com.gem.chike.pojo.*;
import com.gem.chike.service.ShopService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class shopServiceImpl implements ShopService {
    @Autowired
    private ShopMapper shopMapper;

//    11.7  qy
    @Override
    public List<RoundPic> selectRoundTop() {
        return shopMapper.selectRoundTop();
    }

    @Override
    public List<Posts> selectPostsTop() {
        return shopMapper.selectPostsTop();
    }

    @Override
    public List<Posts> selectPostsTops() {
        return shopMapper.selectPostsTops();
    }

    @Override
    public List<Poster> selectPoster() {
        return shopMapper.selectPoster();
    }

    @Override
    public List<Shop> selectshop() {
        return shopMapper.selectShopPic();
    }


}
