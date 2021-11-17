package com.shop.service;

import com.shop.model.Cart;

import java.util.List;

public interface CartService {

    void insert(Cart cart);

    void edit(Cart newCart);

    void delete(int id);

    Cart get(int id);

    List<Cart> getAll();

    List<Cart> search(String keyword);
}
