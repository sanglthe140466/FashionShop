package com.shop.controller.admin;

import com.shop.service.CartItemService;
import com.shop.service.impl.CartServiceItemImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@SuppressWarnings("serial")
@WebServlet(urlPatterns = "/admin/order/delete")
public class OrderDeleteController extends HttpServlet {

    CartItemService cartItemService = new CartServiceItemImpl();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        cartItemService.delete(id);
        resp.sendRedirect(req.getContextPath() + "/admin/order/list");
    }

}
