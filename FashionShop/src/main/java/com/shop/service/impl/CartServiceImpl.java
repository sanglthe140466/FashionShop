package com.shop.service.impl;

import com.shop.dao.CartDao;
import com.shop.dao.impl.CartDaoImpl;
import com.shop.model.Cart;
import com.shop.service.CartService;

import java.util.List;

public class CartServiceImpl implements CartService {

    CartDao cartDao = new CartDaoImpl();

    @Override
    public List<Cart> search(String name) {
        return cartDao.search(name);
    }

    @Override
    public void insert(Cart cart) {
        cartDao.insert(cart);

    }

    @Override
    public List<Cart> getAll() {
        return cartDao.getAll();
    }

    @Override
    public Cart get(int id) {
        return cartDao.get(id);
    }

    @Override
    public void edit(Cart newCart) {
        Cart oldCart = cartDao.get(newCart.getId());

        oldCart.setBuyDate(newCart.getBuyDate());
        oldCart.setBuyer(newCart.getBuyer());

        cartDao.edit(oldCart);

    }

    @Override
    public void delete(int id) {
        cartDao.delete(id);
    }
}
