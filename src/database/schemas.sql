-- MySQL Script generated by MySQL Workbench
-- Sun Feb 19 19:05:17 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema cooper
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cooper
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cooper` DEFAULT CHARACTER SET utf8 ;
USE `cooper` ;

-- -----------------------------------------------------
-- Table `cooper`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cooper`.`roles` (
  `id_rol` INT NOT NULL AUTO_INCREMENT,
  `rol` VARCHAR(75) NOT NULL,
  PRIMARY KEY (`id_rol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cooper`.`coordinaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cooper`.`coordinaciones` (
  `id_coordinacion` INT NOT NULL AUTO_INCREMENT,
  `nombre_coordinacion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_coordinacion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cooper`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cooper`.`Usuarios` (
  `id_usuario` VARCHAR(50) NOT NULL,
  `nombre` VARCHAR(75) NOT NULL,
  `contraseña` VARCHAR(250) NOT NULL,
  `roles_id_rol` INT NOT NULL,
  `coordinaciones_id_coordinacion` INT NOT NULL,
  PRIMARY KEY (`id_usuario`),
  INDEX `fk_Usuarios_roles1_idx` (`roles_id_rol` ASC) VISIBLE,
  INDEX `fk_Usuarios_coordinaciones1_idx` (`coordinaciones_id_coordinacion` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_roles1`
    FOREIGN KEY (`roles_id_rol`)
    REFERENCES `cooper`.`roles` (`id_rol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_coordinaciones1`
    FOREIGN KEY (`coordinaciones_id_coordinacion`)
    REFERENCES `cooper`.`coordinaciones` (`id_coordinacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cooper`.`seguimiento_horarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cooper`.`seguimiento_horarios` (
  `id_seguimiento_horario` INT NOT NULL AUTO_INCREMENT,
  `fecha_ingreso` TIMESTAMP NULL,
  `fecha_salida` TIMESTAMP NULL,
  `Usuarios_id_usuario` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_seguimiento_horario`),
  INDEX `fk_seguimiento_horarios_Usuarios_idx` (`Usuarios_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_seguimiento_horarios_Usuarios`
    FOREIGN KEY (`Usuarios_id_usuario`)
    REFERENCES `cooper`.`Usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cooper`.`horarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cooper`.`horarios` (
  `id_horario` INT NOT NULL AUTO_INCREMENT,
  `fecha_ingreso` TIME NULL,
  `fecha_salida` TIME NULL,
  `Usuarios_id_usuario` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_horario`),
  INDEX `fk_horarios_Usuarios1_idx` (`Usuarios_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_horarios_Usuarios1`
    FOREIGN KEY (`Usuarios_id_usuario`)
    REFERENCES `cooper`.`Usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cooper`.`actividades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cooper`.`actividades` (
  `id_actividad` INT NOT NULL AUTO_INCREMENT,
  `nombre_actividad` VARCHAR(75) NOT NULL,
  `descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`id_actividad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cooper`.`Usuarios_has_actividades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cooper`.`Usuarios_has_actividades` (
  `Usuarios_id_usuario` VARCHAR(50) NOT NULL,
  `actividades_id_actividad` INT NOT NULL,
  PRIMARY KEY (`Usuarios_id_usuario`, `actividades_id_actividad`),
  INDEX `fk_Usuarios_has_actividades_actividades1_idx` (`actividades_id_actividad` ASC) VISIBLE,
  INDEX `fk_Usuarios_has_actividades_Usuarios1_idx` (`Usuarios_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_has_actividades_Usuarios1`
    FOREIGN KEY (`Usuarios_id_usuario`)
    REFERENCES `cooper`.`Usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_actividades_actividades1`
    FOREIGN KEY (`actividades_id_actividad`)
    REFERENCES `cooper`.`actividades` (`id_actividad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cooper`.`actividades_has_coordinacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cooper`.`actividades_has_coordinacion` (
  `actividades_id_actividad` INT NOT NULL,
  `coordinacion_id_coordinacion` INT NOT NULL,
  PRIMARY KEY (`actividades_id_actividad`, `coordinacion_id_coordinacion`),
  INDEX `fk_actividades_has_coordinacion_coordinacion1_idx` (`coordinacion_id_coordinacion` ASC) VISIBLE,
  INDEX `fk_actividades_has_coordinacion_actividades1_idx` (`actividades_id_actividad` ASC) VISIBLE,
  CONSTRAINT `fk_actividades_has_coordinacion_actividades1`
    FOREIGN KEY (`actividades_id_actividad`)
    REFERENCES `cooper`.`actividades` (`id_actividad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_actividades_has_coordinacion_coordinacion1`
    FOREIGN KEY (`coordinacion_id_coordinacion`)
    REFERENCES `cooper`.`coordinaciones` (`id_coordinacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;