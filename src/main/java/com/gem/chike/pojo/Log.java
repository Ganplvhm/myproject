package com.gem.chike.pojo;

public class  Log {
    private int logId;
    private String logTitle;
    private String logIntro;
    private String logPic;
    private int userId;
    private User user;

    public Log() {
    }

    public Log(int logId, String logTitle, String logIntro, String logPic, int userId, User user) {
        this.logId = logId;
        this.logTitle = logTitle;
        this.logIntro = logIntro;
        this.logPic = logPic;
        this.userId = userId;
        this.user = user;
    }

    public int getLogId() {
        return logId;
    }

    public void setLogId(int logId) {
        this.logId = logId;
    }

    public String getLogTitle() {
        return logTitle;
    }

    public void setLogTitle(String logTitle) {
        this.logTitle = logTitle;
    }

    public String getLogIntro() {
        return logIntro;
    }

    public void setLogIntro(String logIntro) {
        this.logIntro = logIntro;
    }

    public String getLogPic() {
        return logPic;
    }

    public void setLogPic(String logPic) {
        this.logPic = logPic;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Log{" +
                "logId=" + logId +
                ", logTitle='" + logTitle + '\'' +
                ", logIntro='" + logIntro + '\'' +
                ", logPic='" + logPic + '\'' +
                ", userId=" + userId +
                ", user=" + user +
                '}';
    }
}

