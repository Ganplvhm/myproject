package com.gem.chike.mapper;

import com.gem.chike.pojo.Shop;
import com.gem.chike.pojo.ShopPic1;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ShopMapper1 {
//普通查询
    @Select("select * from tb_shop where shopStatus=1")
    List<Shop> findAllShop();

    @Select("select count(*) from tb_shop where shopStatus=1")
    int selectcount();

    @Select("select count(*) from tb_shop where shopStatus=1 and shopCatory=#{param1}")
    int selectCatoryCount(int shopCatory);

    @Select("select * from tb_shop where shopId=#{param1}")
    Shop findShopMoreText(int shopId);

    @Select("select * from tb_shopPic where shopId=#{param1}")
    List<ShopPic1> findAllShopPic(int shopId);

    @Select("select * from tb_shop where shopId=#{param1} and shopStatus = 1")
    Shop selectById(int shopId);


    @Select("select * from tb_shop where shopCatory=#{param1}  and shopStatus=1")
    List<Shop> findCatoryShop(int shopCatory);


    @Select("select * from tb_shop where shopName like concat('%',#{param1},'%') and shopStatus=1")
    Shop findShopByLike(String shopName);

    @Select("select shopId from tb_shop where shopName=#{param1} and shopStatus=1")
    int findShopIdByName(String shopName);

    @Select("select * from tb_shop where shopId=#{param1}")
    List<Shop> findAllShopById(int shopId);
}
