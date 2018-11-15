package com.gem.chike.pojo;

public class ShopCollected {
    private int shopCollectedId;
    private int shopId;
    private String userName;
    private String shopName;
    private String shopSimpleIntro;
    private String shopPic;

    public ShopCollected(int shopCollectedId, int shopId, String userName, String shopName, String shopSimpleIntro, String shopPic) {
        this.shopCollectedId = shopCollectedId;
        this.shopId = shopId;
        this.userName = userName;
        this.shopName = shopName;
        this.shopSimpleIntro = shopSimpleIntro;
        this.shopPic = shopPic;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public String getShopSimpleIntro() {
        return shopSimpleIntro;
    }

    public void setShopSimpleIntro(String shopSimpleIntro) {
        this.shopSimpleIntro = shopSimpleIntro;
    }

    public String getShopPic() {
        return shopPic;
    }

    public void setShopPic(String shopPic) {
        this.shopPic = shopPic;
    }

    public ShopCollected() {
    }

    public ShopCollected( int shopId, String userName) {

        this.shopId = shopId;
        this.userName = userName;
    }

    public int getShopCollectedId() {
        return shopCollectedId;
    }

    public void setShopCollectedId(int shopCollectedId) {
        this.shopCollectedId = shopCollectedId;
    }

    public int getShopId() {
        return shopId;
    }

    public void setShopId(int shopId) {
        this.shopId = shopId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "ShopCollected{" +
                "shopCollectedId=" + shopCollectedId +
                ", shopId=" + shopId +
                ", userName='" + userName + '\'' +
                ", shopName='" + shopName + '\'' +
                ", shopSimpleIntro='" + shopSimpleIntro + '\'' +
                ", shopPic='" + shopPic + '\'' +
                '}'+"\n";
    }
}
