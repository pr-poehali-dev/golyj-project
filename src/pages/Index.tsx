import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

type Category = 'all' | 'design' | 'development' | 'photo';

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Дизайн-система',
    category: 'design',
    image: 'https://cdn.poehali.dev/projects/8c756991-8a3b-4998-a059-a9f31fa5ea7c/files/b699a23a-f18e-4a63-8b59-9afe1eeda9b4.jpg',
    description: 'Комплексная дизайн-система для современного веб-приложения с фокусом на UX',
    tags: ['UI/UX', 'Figma', 'Брендинг']
  },
  {
    id: 2,
    title: 'Веб-платформа',
    category: 'development',
    image: 'https://cdn.poehali.dev/projects/8c756991-8a3b-4998-a059-a9f31fa5ea7c/files/8d1a932f-9681-42ec-828e-de6d682d0e94.jpg',
    description: 'Адаптивная веб-платформа с современным интерфейсом и высокой производительностью',
    tags: ['React', 'TypeScript', 'Tailwind']
  },
  {
    id: 3,
    title: 'Креативная фотосессия',
    category: 'photo',
    image: 'https://cdn.poehali.dev/projects/8c756991-8a3b-4998-a059-a9f31fa5ea7c/files/bf98a81a-227f-49c1-ab9d-f3fe5e0ce9a2.jpg',
    description: 'Художественная фотография с акцентом на композицию и цвет',
    tags: ['Портрет', 'Ретушь', 'Концепт']
  },
  {
    id: 4,
    title: 'Мобильное приложение',
    category: 'design',
    image: 'https://cdn.poehali.dev/projects/8c756991-8a3b-4998-a059-a9f31fa5ea7c/files/b699a23a-f18e-4a63-8b59-9afe1eeda9b4.jpg',
    description: 'Дизайн интуитивного мобильного приложения для iOS и Android',
    tags: ['Mobile', 'Прототип', 'UX']
  },
  {
    id: 5,
    title: 'E-commerce сайт',
    category: 'development',
    image: 'https://cdn.poehali.dev/projects/8c756991-8a3b-4998-a059-a9f31fa5ea7c/files/8d1a932f-9681-42ec-828e-de6d682d0e94.jpg',
    description: 'Полнофункциональный интернет-магазин с интеграцией платежных систем',
    tags: ['Next.js', 'E-commerce', 'API']
  },
  {
    id: 6,
    title: 'Арт-проект',
    category: 'photo',
    image: 'https://cdn.poehali.dev/projects/8c756991-8a3b-4998-a059-a9f31fa5ea7c/files/bf98a81a-227f-49c1-ab9d-f3fe5e0ce9a2.jpg',
    description: 'Экспериментальная фотография с использованием современных техник',
    tags: ['Арт', 'Эксперимент', 'Цвет']
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const categories = [
    { value: 'all' as Category, label: 'Все работы', icon: 'Grid' },
    { value: 'design' as Category, label: 'Дизайн', icon: 'Palette' },
    { value: 'development' as Category, label: 'Разработка', icon: 'Code' },
    { value: 'photo' as Category, label: 'Фото', icon: 'Camera' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16 animate-slide-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Портфолио
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Коллекция моих лучших работ в дизайне, разработке и фотографии
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {categories.map((cat) => (
            <Button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              variant={selectedCategory === cat.value ? 'default' : 'outline'}
              size="lg"
              className="transition-all duration-300 hover:scale-105"
            >
              <Icon name={cat.icon} size={18} className="mr-2" />
              {cat.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">
              Проекты не найдены
            </p>
          </div>
        )}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold mb-4">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-full rounded-lg"
            />
            <p className="text-lg text-muted-foreground">
              {selectedProject?.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedProject?.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
