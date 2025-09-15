# Генератор упражнений — как работать с Git в Cursor (очень просто)

## Что внутри
- index.html — страница генератора
- svg_items.js — общие SVG предметов

## Самое главное (3 шага каждый раз)
1. Напишите короткое сообщение в поле Message (что изменили)
2. Нажмите Stage All Changes (добавить все изменения)
3. Нажмите Commit, затем Sync Changes (отправить на GitHub)

Где это найти: левая панель Source Control (значок веточки) или Ctrl+Shift+G.

## Как забрать изменения с GitHub
- Нажмите Pull (или кнопку Sync Changes — она сама сначала подтянет, потом отправит)

## Если вдруг конфликт (редко, не страшно)
1. Откройте файл из списка конфликтов
2. Нажмите Accept Current (оставить своё) или Accept Incoming (взять с GitHub). Можно Accept Both
3. Сохраните файл → Stage (или Stage All)
4. Нажмите Commit → Sync Changes

Подсказка: если сомневаетесь, чаще выбирайте Accept Incoming (то, что на GitHub), потом можно поправить вручную.

## Первый раз: привязка к GitHub
- Если репозитория ещё нет: нажмите Publish Branch в Source Control → следуйте подсказкам
- Если уже есть репозиторий на GitHub:
  1) Меню «…» в Source Control → Remotes → Add Remote → вставьте URL (например, https://github.com/USERNAME/REPO.git)
  2) Нажмите Sync Changes (или Push)

## GitHub Pages (сайт из репозитория)
1. В репозитории на GitHub: Settings → Pages → Source: Deploy from a branch
2. Branch: main, Folder: /(root) → Save
3. Через 1–2 минуты сайт будет доступен по адресу:
   - если сайт в index.html: https://USERNAME.github.io/REPO/
   - если другой файл — укажите путь в URL

## Полезные кнопки в Cursor (без терминала)
- Stage All Changes — добавить все изменения в коммит
- Commit — сохранить изменения с сообщением
- Sync Changes — Pull + Push одной кнопкой
- Pull — только забрать изменения с GitHub
- Abort Rebase / Continue Rebase — не пригодится, если пользуетесь Sync/Pull и решаете конфликты через интерфейс

Готово! Этого достаточно, чтобы безопасно: «написать → сохранить → отправить на GitHub → открыть сайт». Если что-то не получается — сначала нажмите Pull, потом повторите три шага «Stage → Commit → Sync». 
