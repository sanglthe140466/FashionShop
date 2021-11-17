package com.shop.dao;

import com.shop.model.Cart;

import java.util.List;

public interface CartDao {

    void insert(Cart cart);

    void edit(Cart cart);

    void delete(int id);

    Cart get(String name);

    Cart get(int id);

    List<Cart> getAll();

    List<Cart> search(String name);
}
