package com.gem.chike.pojo;

public class ShopPic1 {
    private int shopPicId;
    private String shopPicSrc;
     private int shopId;

    public ShopPic1() {
    }

    public ShopPic1(int shopPicId, String shopPicSrc, int shopId) {
        this.shopPicId = shopPicId;
        this.shopPicSrc = shopPicSrc;
        this.shopId = shopId;
    }

    public int getShopPicId() {
        return shopPicId;
    }

    public void setShopPicId(int shopPicId) {
        this.shopPicId = shopPicId;
    }

    public String getShopPicSrc() {
        return shopPicSrc;
    }

    public void setShopPicSrc(String shopPicSrc) {
        this.shopPicSrc = shopPicSrc;
    }

    public int getShopId() {
        return shopId;
    }

    public void setShopId(int shopId) {
        this.shopId = shopId;
    }

    @Override
    public String toString() {
        return "ShopPic{" +
                "shopPicId=" + shopPicId +
                ", shopPicSrc='" + shopPicSrc + '\'' +
                ", shopId=" + shopId +
                '}'+"\n";
    }
}
