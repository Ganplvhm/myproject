package com.gem.chike.mapper;

import com.gem.chike.pojo.Fashimg;

import java.util.List;

public interface FashimgMapper {
    List<Fashimg> selectfashimg();

    Fashimg selectfashimgById(int fashionerId);
}
