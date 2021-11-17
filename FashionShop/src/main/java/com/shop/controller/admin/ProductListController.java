package com.shop.controller.admin;

import com.shop.model.Product;
import com.shop.service.CategoryService;
import com.shop.service.ProductService;
import com.shop.service.impl.CategoryServiceImpl;
import com.shop.service.impl.ProductServiceImpl;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@SuppressWarnings("serial")
@WebServlet(urlPatterns = {"/admin/product/list"})
public class ProductListController extends HttpServlet {

    ProductService productService = new ProductServiceImpl();
    CategoryService cateService = new CategoryServiceImpl();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Product> proList = productService.getAll();
        req.setAttribute("proList", proList);
        RequestDispatcher dispatcher = req.getRequestDispatcher("/view/admin/view/list-product.jsp");
        dispatcher.forward(req, resp);
    }
}
