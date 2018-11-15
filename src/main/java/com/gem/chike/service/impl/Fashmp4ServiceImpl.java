package com.gem.chike.service.impl;

import com.gem.chike.mapper.Fashimg1Mapper;
import com.gem.chike.pojo.Fashimg;
import com.gem.chike.service.Fashmp4Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Fashmp4ServiceImpl implements Fashmp4Service {
    @Autowired
    private Fashimg1Mapper fashimg1Mapper;
    @Override
    public List<Fashimg> selectfashmp4() {
        return  fashimg1Mapper.selectfashmp4();
    }
}
