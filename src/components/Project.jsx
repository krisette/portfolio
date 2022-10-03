import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export default function Project( {project}) {

  const { name, img_src, description, tech, demo, github } = project;

  return (
    <Card className="w-80 bg-gray-900">
    <CardHeader color="pink" className="relative h-56">
      <img
        src={img_src}
        alt="img-blur-shadow"
        className="h-full w-full"
      />
    </CardHeader>
    <CardBody className="text-center">
      <Typography variant="h5" className="mb-2 text-gray-100">
        {name}
      </Typography>
      <Typography className="mb-2 text-gray-100">
        {description}
      </Typography>
      <Typography variant="small" className="text-gray-400">
        {tech}
      </Typography>
    </CardBody>
    <CardFooter divider className="flex items-center justify-between py-3">
    <Typography variant="small"><a href={demo} alt="Demo"  target="_blank"><Button className="bg-pink-100">Demo</Button></a></Typography>
      <Typography variant="small" color="gray" className="flex gap-1">
        <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
        <a href={github} alt="GitHub Repo"  target="_blank"><Button className="bg-pink-100">GitHub Repo</Button></a>
      </Typography>
    </CardFooter>
  </Card>
  );
}