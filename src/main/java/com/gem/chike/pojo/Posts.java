package com.gem.chike.pojo;

public class Posts{

    private int postid;
    private String postname;
    private String postpic;
    private String postintro;
    private int postspraise;
    private String postssimpleintro;
    private int posterid;
    private int catoryid;

    public Posts() {
    }

    public Posts(int postid, String postname, String postpic, String postintro, int postspraise, String postssimpleintro, int posterid, int catoryid) {
        this.postid = postid;
        this.postname = postname;
        this.postpic = postpic;
        this.postintro = postintro;
        this.postspraise = postspraise;
        this.postssimpleintro = postssimpleintro;
        this.posterid = posterid;
        this.catoryid = catoryid;
    }

    public int getPostspraise() {
        return postspraise;
    }

    public void setPostspraise(int postspraise) {
        this.postspraise = postspraise;
    }

    public String getPostssimpleintro() {
        return postssimpleintro;
    }

    public void setPostssimpleintro(String postssimpleintro) {
        this.postssimpleintro = postssimpleintro;
    }

    public int getCatoryid() {
        return catoryid;
    }

    public void setCatoryid(int catoryid) {
        this.catoryid = catoryid;
    }


    public int getPostid() {
        return postid;
    }

    public void setPostid(int postid) {
        this.postid = postid;
    }

    public String getPostname() {
        return postname;
    }

    public void setPostname(String postname) {
        this.postname = postname;
    }

    public String getPostpic() {
        return postpic;
    }

    public void setPostpic(String postpic) {
        this.postpic = postpic;
    }

    public String getPostintro() {
        return postintro;
    }

    public void setPostintro(String postintro) {
        this.postintro = postintro;
    }



    public int getPosterid() {
        return posterid;
    }

    public void setPosterid(int posterid) {
        this.posterid = posterid;
    }

    @Override
    public String toString() {
        return "Posts{" +
                "postid=" + postid +
                ", postname='" + postname + '\'' +
                ", postpic='" + postpic + '\'' +
                ", postintro='" + postintro + '\'' +
                ", postspraise=" + postspraise +
                ", postssimpleintro='" + postssimpleintro + '\'' +
                ", posterid=" + posterid +
                ", catoryid=" + catoryid +
                '}'+"\n";
    }
}

