"use client";
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Tag, Radio } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import { PlusOutlined } from '@ant-design/icons';
const { Meta } = Card;

const Cards = (props: any) => {
  const categories = ['Farewell', 'Birthday', 'Baby', 'Wedding', 'Get Well', 'Sympathy', 'Thank you', 'Retirement', 'Congratulations', 'Anniversary', 'Welcome', 'New Home', 'See More...'];
console.log(props,"qwqeqw");

  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category'||"Farewell");
  const [selectedCategory, setSelectedCategory] = useState<any>(categoryFromUrl);
  const [scrollPosition, setScrollPosition] = useState(0);
console.log(selectedCategory,"selectedCategory");

useEffect(() => {
  // Check if selectedCategory is a string
  const category = typeof selectedCategory?.title === 'string' ? selectedCategory?.title?.toLowerCase() : 'farewell';

  // Navigate to the URL with the category parameter
  router.push(`/?category=${category}`);
}, [selectedCategory, router]);

  // useEffect(() => {
  //   // Sync state with URL on component mount or URL change
  //   if (categoryFromUrl !== selectedCategory) {
  //     setSelectedCategory(categoryFromUrl);
  //   }
  // }, [categoryFromUrl, selectedCategory]);

  const filteredCards = selectedCategory.title === 'Farewell'
    ? props?.data
    : props?.data.filter((card: any) => card.cardType === selectedCategory);

  const handleCategoryChange = (e: any) => {
    console.log(e.target.value,"werwe");
    
    setSelectedCategory(e.target.value);
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      {/* Title */}
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
        Get Started by Selecting a Card Design or Uploading Your Own!
      </h1>
      
      {/* Subtext */}
      <p style={{ fontSize: '18px', color: '#555' }}>
        All cards include <strong style={{ textDecoration: 'underline', color: '#000' }}>unlimited messages and pages</strong>. You can change your design at any time before sending.
      </p>

      {/* Categories */}
      <Row justify="center" gutter={[10, 10]} style={{ marginBottom: '40px' }}>
        <Col>
          <Radio.Group value={selectedCategory} defaultValue={"Farewell"} onChange={handleCategoryChange}>
            {/* <Radio.Button value="Farewell">All</Radio.Button> */}
            {props?.data.map((category:any, index:number) => (
              <Radio.Button key={index} value={category}>
                {category?.title}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Col>
      </Row>

      {/* Card Images */}
      <Row gutter={[20, 20]} justify="center" style={{ marginBottom: '40px' }}>
        {filteredCards?.map((card: any, index: number) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={card.title} src={card.img} />}
              actions={card.isNew && [<Tag color="orange">New</Tag>]}
            >
              <Meta title={card.title} />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Button */}
      <Button type="primary" shape="round" icon={<PlusOutlined />} size="large">
        See more designs
      </Button>
    </div>
  );
};

export default Cards;
