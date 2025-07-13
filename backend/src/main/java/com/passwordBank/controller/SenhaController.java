package com.passwordBank.controller;

import com.passwordBank.model.Senha;
import com.passwordBank.repository.SenhaRepository;
import com.passwordBank.service.SenhaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/senhas")
@CrossOrigin(origins = "*") 
public class SenhaController {

    @Autowired
    private SenhaRepository repo;

    @Autowired
    private SenhaService crypto;

    @PostMapping
    public Senha salvar(@RequestBody Senha senha) throws Exception {
        senha.setSenhaCriptografada(crypto.criptografar(senha.getSenhaCriptografada()));
        return repo.save(senha);
    }

    @GetMapping
    public List<Senha> listar() throws Exception {
        List<Senha> senhas = repo.findAll();
        for (Senha s : senhas) {
            s.setSenhaCriptografada(crypto.descriptografar(s.getSenhaCriptografada()));
        }
        return senhas;
    }
}
