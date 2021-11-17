package com.shop.controller.admin;

import com.shop.model.CartItem;
import com.shop.service.CartItemService;
import com.shop.service.CartService;
import com.shop.service.impl.CartServiceImpl;
import com.shop.service.impl.CartServiceItemImpl;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@SuppressWarnings("serial")
@WebServlet(urlPatterns = {"/admin/order/list"})
public class OrderListController extends HttpServlet {

    CartItemService cartItemService = new CartServiceItemImpl();
    CartService cartService = new CartServiceImpl();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<CartItem> listCartItem = cartItemService.getAll();
        req.setAttribute("listCartItem", listCartItem);
        RequestDispatcher dispatcher = req.getRequestDispatcher("/view/admin/view/list-order.jsp");
        dispatcher.forward(req, resp);
    }

}
