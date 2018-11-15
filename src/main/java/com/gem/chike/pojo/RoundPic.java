package com.gem.chike.pojo;

public class RoundPic {
    private int roundPicId;
    private String roundPicSrc;

    public RoundPic() {
    }

    public RoundPic(int roundPicId, String roundPicSrc) {
        this.roundPicId = roundPicId;
        this.roundPicSrc = roundPicSrc;
    }

    public int getRoundPicId() {
        return roundPicId;
    }

    public void setRoundPicId(int roundPicId) {
        this.roundPicId = roundPicId;
    }

    public String getRoundPicSrc() {
        return roundPicSrc;
    }

    public void setRoundPicSrc(String roundPicSrc) {
        this.roundPicSrc = roundPicSrc;
    }

    @Override
    public String toString() {
        return "RoundPic{" +
                "roundPicId=" + roundPicId +
                ", roundPicSrc='" + roundPicSrc + '\'' +
                '}'+"\n";
    }
}
