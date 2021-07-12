package controllers

import "github.com/vi0letmist/ainoTest/api/middlewares"

func (s *Server) initializeRoutes() {

	// Home Route
	s.Router.HandleFunc("/", middlewares.SetMiddlewareJSON(s.Home)).Methods("GET")

	// Login Route
	s.Router.HandleFunc("/api/auth/login", middlewares.SetMiddlewareJSON(s.Login)).Methods("POST")

	// Register route
	s.Router.HandleFunc("/api/auth/register", middlewares.SetMiddlewareJSON(s.Register)).Methods("POST")
}
