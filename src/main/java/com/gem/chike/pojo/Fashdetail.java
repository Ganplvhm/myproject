package com.gem.chike.pojo;

public class Fashdetail {
    private int cardId;
    private String cardImgsrc;
    private String carddescript;
    private  int fashionerId;

    public Fashdetail() {
    }

    public Fashdetail(int cardId, String cardImgsrc, String carddescript, int fashionerId) {
        this.cardId = cardId;
        this.cardImgsrc = cardImgsrc;
        this.carddescript = carddescript;
        this.fashionerId = fashionerId;
    }

    public int getCardId() {
        return cardId;
    }

    public void setCardId(int cardId) {
        this.cardId = cardId;
    }

    public String getCardImgsrc() {
        return cardImgsrc;
    }

    public void setCardImgsrc(String cardImgsrc) {
        this.cardImgsrc = cardImgsrc;
    }

    public String getCarddescript() {
        return carddescript;
    }

    public void setCarddescript(String carddescript) {
        this.carddescript = carddescript;
    }

    public int getFashionerId() {
        return fashionerId;
    }

    public void setFashionerId(int fashionerId) {
        this.fashionerId = fashionerId;
    }

    @Override
    public String toString() {
        return "Fashdetail{" +
                "cardId=" + cardId +
                ", cardImgsrc='" + cardImgsrc + '\'' +
                ", carddescript='" + carddescript + '\'' +
                ", fashionerId=" + fashionerId +
                '}';
    }
}
