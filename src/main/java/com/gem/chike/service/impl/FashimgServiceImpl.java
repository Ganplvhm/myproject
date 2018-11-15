package com.gem.chike.service.impl;

import com.gem.chike.mapper.FashimgMapper;
import com.gem.chike.pojo.Fashimg;
import com.gem.chike.service.FashimgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FashimgServiceImpl implements FashimgService {
    @Autowired
    private FashimgMapper fashimgMapper;
    @Override
    public List<Fashimg> selectfashimg() {
        return fashimgMapper.selectfashimg();
    }

    @Override
    public Fashimg selectfashimgById(int fashionerId) {
        return fashimgMapper.selectfashimgById(fashionerId);
    }
}
