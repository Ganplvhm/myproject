package com.gem.chike.pojo;

public class Poster {
    private int posterid;
    private String postername;
    private String posterintro;
    private String posterpic;
    private int fensinum;
    private int cardsnum;
    private String ptime;
//    qy  11.7
    private String postertalk;

    public Poster() {
    }
    public Poster(int posterid, String postername, String posterintro, String posterpic) {
        this.posterid = posterid;
        this.postername = postername;
        this.posterintro = posterintro;
        this.posterpic = posterpic;
    }
    public Poster(int posterid, String postername, String posterintro, String posterpic, String postertalk) {
        this.posterid = posterid;
        this.postername = postername;
        this.posterintro = posterintro;
        this.posterpic = posterpic;
        this.postertalk = postertalk;
    }

    public int getFensinum() {
        return fensinum;
    }

    public void setFensinum(int fensinum) {
        this.fensinum = fensinum;
    }

    public int getCardsnum() {
        return cardsnum;
    }

    public void setCardsnum(int cardsnum) {
        this.cardsnum = cardsnum;
    }

    public String getPtime() {
        return ptime;
    }

    public void setPtime(String ptime) {
        this.ptime = ptime;
    }

    public String getPostertalk() {
        return postertalk;
    }

    public void setPostertalk(String postertalk) {
        this.postertalk = postertalk;
    }

    public int getPosterid() {
        return posterid;
    }

    public void setPosterid(int posterid) {
        this.posterid = posterid;
    }

    public String getPostername() {
        return postername;
    }

    public void setPostername(String postername) {
        this.postername = postername;
    }

    public String getPosterintro() {
        return posterintro;
    }

    public void setPosterintro(String posterintro) {
        this.posterintro = posterintro;
    }

    public String getPosterpic() {
        return posterpic;
    }

    public void setPosterpic(String posterpic) {
        this.posterpic = posterpic;
    }

    @Override
    public String toString() {
        return "Poster{" +
                "posterid=" + posterid +
                ", postername='" + postername + '\'' +
                ", posterintro='" + posterintro + '\'' +
                ", posterpic='" + posterpic + '\'' +
                ", fensinum=" + fensinum +
                ", cardsnum=" + cardsnum +
                ", ptime='" + ptime + '\'' +
                ", postertalk='" + postertalk + '\'' +
                '}'+"\n";
    }
}
