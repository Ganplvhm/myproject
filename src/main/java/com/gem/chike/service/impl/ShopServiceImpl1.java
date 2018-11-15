package com.gem.chike.service.impl;


import com.gem.chike.mapper.ShopMapper1;
import com.gem.chike.pojo.Shop;
import com.gem.chike.pojo.ShopPic1;
import com.gem.chike.service.ShopService1;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopServiceImpl1 implements ShopService1 {

    @Autowired
    private ShopMapper1 shopMapper1;


    @Override
    public List<Shop> getAllShop() {
        return shopMapper1.findAllShop();
    }

    @Override
    public Shop getShopMore(int shopId) {
        return shopMapper1.findShopMoreText(shopId);
    }

    @Override
    public List<ShopPic1> getShopPic(int shopId) {
        return shopMapper1.findAllShopPic(shopId);
    }

    @Override
    public Shop getShopById(int shopId) {
        return shopMapper1.selectById(shopId);
    }

    @Override
    public List<Shop> getCatoryShop(int shopCatory) {
        return shopMapper1.findCatoryShop(shopCatory);
    }

    @Override
    public Shop getShopByLike(String shopName) {
        return shopMapper1.findShopByLike(shopName);
    }

    @Override
    public int getShopIdByName(String shopName) {
        return shopMapper1.findShopIdByName(shopName);
    }

    @Override
    public int count() {
        return shopMapper1.selectcount();
    }

    @Override
    public int catoryCount(int shopCatory) {
        return shopMapper1.selectCatoryCount(shopCatory);
    }


    @Override
    public PageInfo<Shop> getAllSearchShop(int curPage) {
        int count = shopMapper1.selectcount();
        System.out.println(count);
//        添加分页拦截
        PageHelper.startPage(curPage,9);
        List<Shop> shopList = shopMapper1.findAllShop();
        PageInfo<Shop> pageInfo = new PageInfo<>(shopList);
//        当前页
        pageInfo.setPageNum(curPage);
//        每页条数
        pageInfo.setPageSize(9);
//        总条数
        pageInfo.setTotal(count);

        return pageInfo;
    }

    @Override
    public PageInfo<Shop> getCatorySearchShop(int curPage, int shopCatory) {
        int count = shopMapper1.selectCatoryCount(shopCatory);
        System.out.println(count);
//        添加分页拦截
        PageHelper.startPage(curPage,9);
        List<Shop> shopList = shopMapper1.findCatoryShop(shopCatory);
        PageInfo<Shop> pageInfo = new PageInfo<>(shopList);
//        当前页
        pageInfo.setPageNum(curPage);
//        每页条数
        pageInfo.setPageSize(9);
//        总条数
        pageInfo.setTotal(count);
        return pageInfo;
    }


}
