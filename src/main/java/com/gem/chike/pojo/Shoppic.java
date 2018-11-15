package com.gem.chike.pojo;

public class Shoppic {
    private int shopId;
    private String shopPicSrc;
    private int praiseNum;
    private  String shopInfro;

    public Shoppic() {
    }

    public Shoppic(int shopId, String shopPicSrc, int praiseNum) {
        this.shopId = shopId;
        this.shopPicSrc = shopPicSrc;
        this.praiseNum = praiseNum;
    }

    public String getShopInfro() {
        return shopInfro;
    }

    public void setShopInfro(String shopInfro) {
        this.shopInfro = shopInfro;
    }

    public int getShopId() {
        return shopId;
    }

    public void setShopId(int shopId) {
        this.shopId = shopId;
    }

    public String getShopPicSrc() {
        return shopPicSrc;
    }

    public void setShopPicSrc(String shopPicSrc) {
        this.shopPicSrc = shopPicSrc;
    }

    public int getPraiseNum() {
        return praiseNum;
    }

    public void setPraiseNum(int praiseNum) {
        this.praiseNum = praiseNum;
    }

    @Override
    public String toString() {
        return "shoppic{" +
                "shopId=" + shopId +
                ", shopPicSrc='" + shopPicSrc + '\'' +
                ", praiseNum=" + praiseNum +
                '}';
    }
}
