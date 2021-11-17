package com.shop.controller.admin;

import com.shop.service.ProductService;
import com.shop.service.impl.ProductServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@SuppressWarnings("serial")
@WebServlet(urlPatterns = {"/admin/product/delete"})
public class ProductDeleteController extends HttpServlet {

    ProductService productService = new ProductServiceImpl();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        productService.delete(Integer.parseInt(id));
        resp.sendRedirect(req.getContextPath() + "/admin/product/list");
    }
}
