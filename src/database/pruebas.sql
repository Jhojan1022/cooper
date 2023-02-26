use cooper;

insert into roles(rol) values("Administrador");
insert into coordinaciones(nombre_coordinacion) values("Base de datos");
insert into usuarios(id_usuario, nombre, contraseña, roles_id_rol, coordinaciones_id_coordinacion)
values("JT22859", "Jhojann Estiven Triana Quiroga", "123", 1, 1);

-- Insertar hora de entrada y salida

insert into seguimiento_horarios(fecha_ingreso, Usuarios_id_usuario)
values('2020-06-13T18:30:00.000Z', 'JT22859');

-- Actualizar fecha de salida

update seguimiento_horarios set fecha_salida = '2023-02-19 21:10' where fecha_salida is null;

select * from usuarios;
select * from roles;
select * from coordinaciones;
select * from seguimiento_horarios
