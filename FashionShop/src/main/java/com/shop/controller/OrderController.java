package com.shop.controller;

import com.shop.model.Cart;
import com.shop.model.CartItem;
import com.shop.model.User;
import com.shop.service.CartItemService;
import com.shop.service.CartService;
import com.shop.service.UserService;
import com.shop.service.impl.CartServiceImpl;
import com.shop.service.impl.CartServiceItemImpl;
import com.shop.service.impl.UserServiceImpl;
import com.shop.tools.SendMail;
import com.shop.util.RandomUUID;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Map;

@SuppressWarnings("serial")
@WebServlet(urlPatterns = "/member/order")
public class OrderController extends HttpServlet {

    UserService userService = new UserServiceImpl();
    CartService cartService = new CartServiceImpl();
    CartItemService cartItemService = new CartServiceItemImpl();
    long time = System.currentTimeMillis();

    @SuppressWarnings("static-access")
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        Object obj = session.getAttribute("account");
        User buyer = (User) obj;
        Cart cart = new Cart();
        cart.setBuyer(buyer);
        cart.setBuyDate(new java.sql.Date(time));
        cart.setId(RandomUUID.getRandomID());
        cartService.insert(cart);

        Object objCart = session.getAttribute("cart");
        if (objCart != null) {
            // ep ve dung kieu cua no khi them vao o phan them vao gio hang controller
            @SuppressWarnings("unchecked")
            Map<Integer, CartItem> map = (Map<Integer, CartItem>) objCart;

            for (CartItem cartItem : map.values()) {
                cartItem.setCart(cart);
                cartItem.setId(RandomUUID.getRandomID());
                SendMail sm = new SendMail();
                sm.sendMail(cart.getBuyer().getEmail(), "UNIFY", " Nội dung maill! ");
                cartItemService.insert(cartItem);

            }

        }
        session.removeAttribute("cart");
        resp.sendRedirect(req.getContextPath() + "/waiting");

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
