package com.gem.chike.service.impl;

import com.gem.chike.mapper.CollectedMapper;
import com.gem.chike.pojo.FashionerConcerned;
import com.gem.chike.pojo.PostsCollected;
import com.gem.chike.pojo.Shop;
import com.gem.chike.pojo.ShopCollected;
import com.gem.chike.service.CollectedService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollectedServiceImpl implements CollectedService {

    @Autowired
    private CollectedMapper collectedMapper;
    @Override
    public void insertCollectedShop(int shopId,String userName,String shopName, String shopSimpleIntro, String shopPic) {
        collectedMapper.insertCollectedShop(shopId,userName,shopName,shopSimpleIntro,shopPic);
    }

    @Override
    public PageInfo<ShopCollected> getCollectedShop(int curPage,String userName) {
        System.out.println("收藏店家传过来的用户名是："+userName);
        int count = collectedMapper.selectCollectedShopNum(userName);
        System.out.println(count);
//        添加分页拦截
        PageHelper.startPage(curPage,9);
        List<ShopCollected> shopList = collectedMapper.selectCollectedShop(userName);
        PageInfo<ShopCollected> pageInfo = new PageInfo<>(shopList);
//        当前页
        pageInfo.setPageNum(curPage);
//        每页条数
        pageInfo.setPageSize(9);
//        总条数
        pageInfo.setTotal(count);

        return pageInfo;
    }

    @Override
    public void insertCollectedPosts(int postid,String userName,String postname, String postssimpleintro, String postpic) {
        collectedMapper.insertCollectedPosts(postid,userName,postname,postssimpleintro,postpic);
    }

    @Override
    public PageInfo<PostsCollected> getCollectedPosts(int curPage, String userName) {
        System.out.println("收藏帖子传过来的用户名是："+userName);
        int count = collectedMapper.selectCollectedPostsNum(userName);
        System.out.println(count);
//        添加分页拦截
        PageHelper.startPage(curPage,9);
        List<PostsCollected> postsList = collectedMapper.selectCollectedPosts(userName);
        PageInfo<PostsCollected> pageInfo = new PageInfo<>(postsList);
//        当前页
        pageInfo.setPageNum(curPage);
//        每页条数
        pageInfo.setPageSize(9);
//        总条数
        pageInfo.setTotal(count);

        return pageInfo;
    }

    @Override
    public void insertCollectedPostse(int posterid,String userName, String postername, String posterintro, String posterpic) {
        collectedMapper.insertCollectedPoster(posterid,userName,postername,posterintro,posterpic);
    }

    @Override
    public PageInfo<FashionerConcerned> getCollectedPoster(int curPage, String userName) {
        System.out.println("关注达人传过来的用户名是："+userName);
        int count = collectedMapper.selectConcernedFashionerNum(userName);
        System.out.println(count);
//        添加分页拦截
        PageHelper.startPage(curPage,9);
        List<FashionerConcerned> posterList = collectedMapper.selectConcernedFashioner(userName);
        PageInfo<FashionerConcerned> pageInfo = new PageInfo<>(posterList);
//        当前页
        pageInfo.setPageNum(curPage);
//        每页条数
        pageInfo.setPageSize(9);
//        总条数
        pageInfo.setTotal(count);

        return pageInfo;
    }

    @Override
    public List<PostsCollected> getCollectedPost(String userName) {
        return collectedMapper.selectCollectedPosts(userName);
    }
}
