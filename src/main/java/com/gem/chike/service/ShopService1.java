package com.gem.chike.service;

import com.gem.chike.pojo.Shop;
import com.gem.chike.pojo.ShopPic1;
import com.github.pagehelper.PageInfo;

import java.util.List;


public interface ShopService1 {

    List<Shop> getAllShop();//查找所有的商家

    Shop getShopMore(int shopId);//显示more里面的信息

    List<ShopPic1> getShopPic(int shopId);//显示图片

    Shop getShopById(int shopId);//按商家编号查找


    List<Shop> getCatoryShop(int shopCatory);//按照商家类别查询

    Shop getShopByLike(String shopName);//商家名字模糊查询
    int getShopIdByName(String shopName);//按商家名字查询商家编号

    int count();//查询商家总数
    int catoryCount(int shopCatory);
//分页
    PageInfo<Shop> getAllSearchShop(int curPage);//分页查询商家
    PageInfo<Shop> getCatorySearchShop(int curPage,int shopCatory);//按照商家类别查询
}
