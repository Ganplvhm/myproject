package com.gem.chike.pojo;



//CREATE TABLE `tb_user` (
//        `userId` int(11) NOT NULL,
//        `userPwd` varchar(255) NOT NULL,
//        `userName` varchar(255) NOT NULL,
//        `userAge` int(11) DEFAULT NULL,
//        `userSex` int(11) DEFAULT NULL,
//        `userAddress` varchar(255) DEFAULT NULL,
//        `userEmail` varchar(255) DEFAULT NULL,
//        `userPhone` varchar(255) NOT NULL,
//        `shopId` int(11) DEFAULT NULL,
//        `fashionerId` int(11) DEFAULT NULL,
//        `popularId` int(11) DEFAULT NULL,
//        `userStatus` int(11) NOT NULL DEFAULT '1',
//        PRIMARY KEY (`userId`)
//        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

public class User {
    private int id=1001;
    private int userId;
    private String userPwd;
    private String userName;
    private String userPhone;
    private String userSex;
    private int userAge;
    private String userEmail;
    private String userAddress;
    private String userTopic;

    private String userLogoSrc;
    public User() {

    }

    public User(int userId, String userPwd, String userName, String userPhone) {
        this.userId = userId;
        this.userPwd = userPwd;
        this.userName = userName;
        this.userPhone = userPhone;
    }

    public User(int id, int userId, String userPwd, String userName, String userPhone, String userSex, int userAge, String userEmail, String userAddress, String userTopic, String userLogoSrc) {
        this.id = id;
        this.userId = userId;
        this.userPwd = userPwd;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userSex = userSex;
        this.userAge = userAge;
        this.userEmail = userEmail;
        this.userAddress = userAddress;
        this.userTopic = userTopic;
        this.userLogoSrc = userLogoSrc;
    }

    public String getUserTopic() {
        return userTopic;
    }

    public void setUserTopic(String userTopic) {
        this.userTopic = userTopic;
    }

    public String getUserLogoSrc() {
        return userLogoSrc;
    }

    public void setUserLogoSrc(String userLogoSrc) {
        this.userLogoSrc = userLogoSrc;
    }

    public String getUserSex() {
        return userSex;
    }

    public void setUserSex(String userSex) {
        this.userSex = userSex;
    }

    public int getUserAge() {
        return userAge;
    }

    public void setUserAge(int userAge) {
        this.userAge = userAge;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public User(String userSex, int userAge, String userEmail, String userAddress) {
        this.userSex = userSex;
        this.userAge = userAge;
        this.userEmail = userEmail;
        this.userAddress = userAddress;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserPwd() {
        return userPwd;
    }

    public void setUserPwd(String userPwd) {
        this.userPwd = userPwd;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userId=" + userId +
                ", userPwd='" + userPwd + '\'' +
                ", userName='" + userName + '\'' +
                ", userPhone='" + userPhone + '\'' +
                ", userSex='" + userSex + '\'' +
                ", userAge=" + userAge +
                ", userEmail='" + userEmail + '\'' +
                ", userAddress='" + userAddress + '\'' +
                ", userLogoSrc='" + userLogoSrc + '\'' +
                '}'+"\n";
    }
}
