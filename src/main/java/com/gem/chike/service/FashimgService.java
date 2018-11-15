package com.gem.chike.service;

import com.gem.chike.pojo.Fashimg;

import java.util.List;

public interface FashimgService {
    List<Fashimg> selectfashimg();

    Fashimg selectfashimgById(int fashionerId);
}
