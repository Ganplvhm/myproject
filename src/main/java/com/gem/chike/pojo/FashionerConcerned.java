package com.gem.chike.pojo;

public class FashionerConcerned {
    private int fashionerConcernedId;
    private int posterid;
    private String  postername;
    private String posterintro;
    private String posterpic;
    private String userName;

    public FashionerConcerned() {
    }

    public FashionerConcerned(int fashionerConcernedId, int posterid, String postername, String posterintro, String posterpic, String userName) {
        this.fashionerConcernedId = fashionerConcernedId;
        this.posterid = posterid;
        this.postername = postername;
        this.posterintro = posterintro;
        this.posterpic = posterpic;
        this.userName = userName;
    }

    public int getFashionerConcernedId() {
        return fashionerConcernedId;
    }

    public void setFashionerConcernedId(int fashionerConcernedId) {
        this.fashionerConcernedId = fashionerConcernedId;
    }


    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
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
        return "FashionerConcerned{" +
                "fashionerConcernedId=" + fashionerConcernedId +
                ", posterid=" + posterid +
                ", postername='" + postername + '\'' +
                ", posterintro='" + posterintro + '\'' +
                ", posterpic='" + posterpic + '\'' +
                ", userName='" + userName + '\'' +
                '}'+"\n";
    }
}
