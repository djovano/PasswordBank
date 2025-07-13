package com.passwordBank.repository;

import com.passwordBank.model.Senha;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SenhaRepository extends JpaRepository<Senha, Long> {}
