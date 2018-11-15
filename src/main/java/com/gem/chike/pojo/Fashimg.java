package com.gem.chike.pojo;

public class Fashimg {
    private int fshimg_id;
    private String fshimg_src;
    private int fashionerId;
    private String fashdescript;
    private String fashtitle;
    private String catgory;
    private int  posterId;

    public Fashimg(int fshimg_id, String fshimg_src, int fashionerId,String fashdescript,String fashtitle) {
        this.fshimg_id = fshimg_id;
        this.fshimg_src = fshimg_src;
        this.fashionerId = fashionerId;
        this.fashdescript=fashdescript;
        this.fashtitle=fashtitle;
    }

    public int getPosterId() {
        return posterId;
    }

    public void setPosterId(int posterId) {
        this.posterId = posterId;
    }

    public String getCatgory() {
        return catgory;
    }

    public void setCatgory(String catgory) {
        this.catgory = catgory;
    }

    public String getFashdescript() {
        return fashdescript;
    }

    public void setFashdescript(String fashdescript) {
        this.fashdescript = fashdescript;
    }

    public int getFshimg_id() {
        return fshimg_id;
    }

    public void setFshimg_id(int fshimg_id) {
        this.fshimg_id = fshimg_id;
    }

    public String getFshimg_src() {
        return fshimg_src;
    }

    public void setFshimg_src(String fshimg_src) {
        this.fshimg_src = fshimg_src;
    }

    public int getFashionerId() {
        return fashionerId;
    }

    public void setFashionerId(int fashionerId) {
        this.fashionerId = fashionerId;
    }

    public String getFashtitle() {
        return fashtitle;
    }

    public void setFashtitle(String fashtitle) {
        this.fashtitle = fashtitle;
    }

    public Fashimg() {
    }

    @Override
    public String toString() {
        return "Fashimg{" +
                "fshimg_id=" + fshimg_id +
                ", fshimg_src='" + fshimg_src + '\'' +
                ", fashionerId=" + fashionerId +
                '}';
    }
}
