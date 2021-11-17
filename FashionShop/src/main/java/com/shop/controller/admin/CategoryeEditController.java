package com.shop.controller.admin;

import com.shop.model.Category;
import com.shop.service.CategoryService;
import com.shop.service.impl.CategoryServiceImpl;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@SuppressWarnings("serial")
@WebServlet(urlPatterns = {"/admin/category/edit"})
public class CategoryeEditController extends HttpServlet {

    CategoryService cateService = new CategoryServiceImpl();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        Category category = cateService.get(Integer.parseInt(id));
        req.setAttribute("category", category);
        RequestDispatcher dispatcher = req.getRequestDispatcher("/view/admin/category/edit-category.jsp");
        dispatcher.forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Category category = new Category();
        category.setId(Integer.parseInt(req.getParameter("id")));
        category.setName(req.getParameter("name"));
        cateService.edit(category);
        resp.sendRedirect(req.getContextPath() + "/admin/category/list");

    }
}
