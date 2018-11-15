package com.gem.chike.pojo;

public class Shop {
    private int shopId;
    private String shopName;
    private String shopAddress;
    private String shopSimpleIntro;
    private String shopIntro;
    private String shopInsideIntro;
    private String shopPark;
    private double shopPerCost;
    private String shopWorkTime;
    private int shopCatory;
    private int shopStatus;
    private String shopPic;
    private String shopAddressInfo;
    private int shopConcernNum;

    public Shop(int shopId, String shopName, String shopAddress, String shopSimpleIntro, String shopIntro, String shopInsideIntro, String shopPark, double shopPerCost, String shopWorkTime, int shopCatory, int shopStatus, String shopPic, String shopAddressInfo, int shopConcernNum) {
        this.shopId = shopId;
        this.shopName = shopName;
        this.shopAddress = shopAddress;
        this.shopSimpleIntro = shopSimpleIntro;
        this.shopIntro = shopIntro;
        this.shopInsideIntro = shopInsideIntro;
        this.shopPark = shopPark;
        this.shopPerCost = shopPerCost;
        this.shopWorkTime = shopWorkTime;
        this.shopCatory = shopCatory;
        this.shopStatus = shopStatus;
        this.shopPic = shopPic;
        this.shopAddressInfo = shopAddressInfo;
//        商家关注
        this.shopConcernNum = shopConcernNum;
    }

    public int getShopConcernNum() {
        return shopConcernNum;
    }

    public void setShopConcernNum(int shopConcernNum) {
        this.shopConcernNum = shopConcernNum;
    }

    public String getShopAddressInfo() {
        return shopAddressInfo;
    }

    public void setShopAddressInfo(String shopAddressInfo) {
        this.shopAddressInfo = shopAddressInfo;
    }

    public Shop() {
    }

    public Shop(String shopName, String shopAddress, String shopSimpleIntro, String shopIntro, String shopInsideIntro, String shopPark, double shopPerCost, String shopWorkTime, int shopCatory, int shopStatus, String shopPic, String shopAddressInfo) {
        this.shopName = shopName;
        this.shopAddress = shopAddress;
        this.shopSimpleIntro = shopSimpleIntro;
        this.shopIntro = shopIntro;
        this.shopInsideIntro = shopInsideIntro;
        this.shopPark = shopPark;
        this.shopPerCost = shopPerCost;
        this.shopWorkTime = shopWorkTime;
        this.shopCatory = shopCatory;
        this.shopStatus = shopStatus;
        this.shopPic = shopPic;
        this.shopAddressInfo = shopAddressInfo;
    }

    public String getShopPic() {
        return shopPic;
    }

    public void setShopPic(String shopPic) {
        this.shopPic = shopPic;
    }

    public int getShopId() {
        return shopId;
    }

    public void setShopId(int shopId) {
        this.shopId = shopId;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public String getShopAddress() {
        return shopAddress;
    }

    public void setShopAddress(String shopAddress) {
        this.shopAddress = shopAddress;
    }

    public String getShopIntro() {
        return shopIntro;
    }

    public void setShopIntro(String shopIntro) {
        this.shopIntro = shopIntro;
    }

    public String getShopInsideIntro() {
        return shopInsideIntro;
    }

    public void setShopInsideIntro(String shopInsideIntro) {
        this.shopInsideIntro = shopInsideIntro;
    }

    public String getShopPark() {
        return shopPark;
    }

    public void setShopPark(String shopPark) {
        this.shopPark = shopPark;
    }

    public double getShopPerCost() {
        return shopPerCost;
    }

    public void setShopPerCost(double shopPerCost) {
        this.shopPerCost = shopPerCost;
    }

    public String getShopWorkTime() {
        return shopWorkTime;
    }

    public void setShopWorkTime(String shopWorkTime) {
        this.shopWorkTime = shopWorkTime;
    }

    public int getShopCatory() {
        return shopCatory;
    }

    public void setShopCatory(int shopCatory) {
        this.shopCatory = shopCatory;
    }

    public int getShopStatus() {
        return shopStatus;
    }

    public void setShopStatus(int shopStatus) {
        this.shopStatus = shopStatus;
    }


    public String getShopSimpleIntro() {
        return shopSimpleIntro;
    }

    public void setShopSimpleIntro(String shopSimpleIntro) {
        this.shopSimpleIntro = shopSimpleIntro;
    }

    @Override
    public String toString() {
        return "Shop{" +
                "shopId=" + shopId +
                ", shopName='" + shopName + '\'' +
                ", shopAddress='" + shopAddress + '\'' +
                ", shopSimpleIntro='" + shopSimpleIntro + '\'' +
                ", shopIntro='" + shopIntro + '\'' +
                ", shopInsideIntro='" + shopInsideIntro + '\'' +
                ", shopPark='" + shopPark + '\'' +
                ", shopPerCost=" + shopPerCost +
                ", shopWorkTime='" + shopWorkTime + '\'' +
                ", shopCatory=" + shopCatory +
                ", shopStatus=" + shopStatus +
                ", shopPic='" + shopPic + '\'' +
                ", shopAddressInfo='" + shopAddressInfo + '\'' +
                '}'+"\n";
    }
}
