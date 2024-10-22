# CirupieD - Gestión de Expedientes Clínicos PWA

## Descripción del Proyecto

**CirupieD** es una Aplicación Web Progresiva (PWA) diseñada para la gestión eficiente de expedientes clínicos. Su objetivo es facilitar el acceso y la manipulación de datos clínicos desde cualquier dispositivo, tanto en línea como fuera de línea. La aplicación está desarrollada utilizando **React + Vite** y **Service Workers** para ofrecer una experiencia rápida, accesible y confiable a los profesionales de la salud.

### Objetivos del Proyecto

- Mejorar la accesibilidad a los expedientes clínicos.
- Facilitar la consulta y actualización de datos clínicos en cualquier momento.
- Garantizar la seguridad de la información y cumplir con las normativas de protección de datos clínicos.

## Metodología de Trabajo

### Metodología Utilizada

El desarrollo del proyecto sigue la metodología **Kanban**, la cual permite gestionar el flujo continuo de trabajo de manera dinámica. El equipo trabaja en **sprints** de 1 a 2 semanas, entregando funcionalidades clave de manera incremental y realizando revisiones continuas para asegurar el cumplimiento de los objetivos.

### Gestión de Tareas e Issues

Las tareas y los **issues** se gestionan utilizando **Trello**. El flujo de trabajo sigue los siguientes pasos:
1. **Creación de la tarjeta**: Registro de la tarea en la lista de tareas pendientes.
2. **Asignación**: Se asigna la tarea a un miembro del equipo.
3. **Progreso**: Se mueve la tarea entre los estados: "No Iniciado", "En Progreso", "Completado" o "Bloqueado".
4. **Cierre**: Si la revisión es satisfactoria, la tarea se marca como "Completado".

Las tareas están priorizadas por nivel de importancia:
- **Alta**: Tareas críticas que requieren atención inmediata.
- **Media**: Funcionalidades importantes pero no urgentes.
- **Baja**: Tareas menores o ajustes.

#### Ejemplo de Issue:
- Descripción: Crear un archivo manifest.json.
- Asignado a: Maria Lina Maximo Hernandez
- Fecha de entrega: 12 de octubre
- Sprint: 2
- Prioridad: Media
- Estado: No Iniciado

## Control de Versiones

### Herramienta Seleccionada

El control de versiones se gestiona con **Git** y el repositorio está alojado en **GitHub**.

### Estrategia de Versionamiento

Utilizamos la estrategia **GitFlow** para organizar el desarrollo de forma estructurada:
- **main**: Contiene el código en producción.
- **develop**: Donde se integran nuevas funcionalidades antes de pasar a producción.
- **feature/**: Ramas específicas para el desarrollo de nuevas funcionalidades.
- **hotfix/**: Ramas dedicadas a corregir errores críticos en producción.

#### Jerarquía de Ramas

1. **main** (producción)
2. **develop** (integración de nuevas funcionalidades)
   - **feature/nueva-funcionalidad**
3. **hotfix/** (correcciones críticas)

Cada miembro del equipo trabaja en su propia rama, creada a partir de `develop`, utilizando el prefijo `feature/`. Las ramas de corrección urgente (`hotfix/`) se crean desde `main`.

### Políticas de Merge

Las ramas `feature/` se integran a `develop` mediante **pull requests**, tras pasar por revisiones de código y pruebas. Solo un usuario autorizado puede hacer merges a la rama `main`, asegurando un control de calidad riguroso.

## Estrategia de Despliegue

### Estrategia Seleccionada

Utilizamos un despliegue gradual con la técnica de **Canary Deployment**, que permite introducir nuevas funcionalidades de manera progresiva, minimizando el impacto en caso de fallos.

### Entornos de Despliegue

- **Desarrollo**: Ramas `feature/` en desarrollo.
- **Staging**: Rama `develop`, para validación y pruebas de integración.
- **Producción**: Rama `main`, con código estable.

### Integración Continua (CI/CD)

Se utiliza **GitHub Actions** para automatizar las pruebas y el despliegue en cada commit, asegurando que el código sea probado antes de integrarse en producción.

## Instrucciones para Desarrolladores

### Clonar el Repositorio

```bash
git clone https://github.com/usuario/cirupied.git
cd cirupied
npm install
npm run start 


