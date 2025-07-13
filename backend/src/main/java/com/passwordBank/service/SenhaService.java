package com.passwordBank.service;

import org.springframework.stereotype.Service;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

@Service
public class SenhaService {
    private static final String ALGO = "AES";
    private static final byte[] chave = "1234567890123456".getBytes(); // 16 bytes fixos

    public String criptografar(String texto) throws Exception {
        SecretKey secretKey = new SecretKeySpec(chave, ALGO);
        Cipher cipher = Cipher.getInstance(ALGO);
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        byte[] encrypted = cipher.doFinal(texto.getBytes());
        return Base64.getEncoder().encodeToString(encrypted);
    }

    public String descriptografar(String hash) throws Exception {
        SecretKey secretKey = new SecretKeySpec(chave, ALGO);
        Cipher cipher = Cipher.getInstance(ALGO);
        cipher.init(Cipher.DECRYPT_MODE, secretKey);
        byte[] decrypted = cipher.doFinal(Base64.getDecoder().decode(hash));
        return new String(decrypted);
    }
}
