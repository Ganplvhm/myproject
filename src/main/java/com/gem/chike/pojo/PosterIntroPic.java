package com.gem.chike.pojo;

public class PosterIntroPic {
    private int posterIntroPicId;
    private String posterIntroPicSrc;
    private int posterid;

    public PosterIntroPic() {
    }

    public PosterIntroPic(int posterIntroPicId, String posterIntroPicSrc, int posterid) {
        this.posterIntroPicId = posterIntroPicId;
        this.posterIntroPicSrc = posterIntroPicSrc;
        this.posterid = posterid;
    }

    public int getPosterIntroPicId() {
        return posterIntroPicId;
    }

    public void setPosterIntroPicId(int posterIntroPicId) {
        this.posterIntroPicId = posterIntroPicId;
    }

    public String getPosterIntroPicSrc() {
        return posterIntroPicSrc;
    }

    public void setPosterIntroPicSrc(String posterIntroPicSrc) {
        this.posterIntroPicSrc = posterIntroPicSrc;
    }

    public int getPosterid() {
        return posterid;
    }

    public void setPosterid(int posterid) {
        this.posterid = posterid;
    }

    @Override
    public String toString() {
        return "PosterIntroPic{" +
                "posterIntroPicId=" + posterIntroPicId +
                ", posterIntroPicSrc='" + posterIntroPicSrc + '\'' +
                ", posterid=" + posterid +
                '}'+"\n";
    }
}
