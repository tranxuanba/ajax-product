package com.example.productmanagement.service.product;

import com.example.productmanagement.model.Product;
import com.example.productmanagement.service.IGeneralService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService extends IGeneralService<Product> {
    Page<Product> findAll (Pageable pageable);
    Page<Product>findAllByName(String name, Pageable pageable);
}
