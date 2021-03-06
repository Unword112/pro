import React, { Component } from 'react'
import { Card, CardImg } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default class T1 extends Component {
    render() {
        return (
            <div className="block-example border border-dark">
                <Container>
                    <Row>
                        <Col xs="auto">
                        <h1><b>Playing Super Mario induces structural brain plasticity</b></h1>
                        <br></br>
                        <h3>
                            <b>บทนำ</b>
                        </h3>
                        <br></br>
                        <h5>
                        การเล่นเกมเป็นกิจกรรมที่แพร่หลาย ในการเล่นเกมนั้นเป็นกิจกรรมที่ถูกมองว่าเป็นการฝึกฝนทักษะที่หลากหลาย พลาสติกที่เกี่ยวข้องกับโครงสร้างของสมองที่ยังไม่ได้รับการตรวจสอบ และเมื่อเทียบกับกลุ่มที่ถูกควบคุมฝึกอบรมวิดีโอเกมที่ได้รับการควบคุมเป็นเวลา 2 เดือน อย่างน้อยวันละ 30 นาทีต่อวับกับเกม เราพบว่ามีการเพิ่มขึ้นของเนื้อเยื่อสีเทา (GM)ใน Hippocampal (HC) ซึ่งมีความสำคัญมาก และ Cerebellum 
                        </h5>
                        <br></br>
                        <h5>
                        การเพิ่มขึ้นของ GM ใน HC และ DLPFC นั้นสัมพันธ์กับความต้องการของผู้เข้าร่วมในการเล่นวิดีโอเกม การฝึกเพื่อเพิ่ม GM ในพื้นที่สมองนั้นสำคัญในเชิงพื้นที่ในการวางแผนเชิงกลยุทย์จากหน่วนความจำทั้งประสิทธิภาพในการทำงานและพฤติกรรมของการวางกลยุทย์ จากการนำเสนอจึงอาจมีความเป็นไปได้ในการรักษาสำหรับโรคทางจิต
                        </h5>
                        <br></br>
                        <h5>
                        วิดีโอเกมนั้นเริ่มแพร่หลายมากขึ้นเรี่อยๆในทุกชั่งอายุ ทุกวันนี้ผู้คนมีเวลารวมกันกว่า 3 พันล้านชั่วโมงต่อสัปดาห์ในการเล่นวิดีโอเกมทั่วโลก มีการคาดการณ์ว่าคนหนุ่มสาวโดยเฉลี่ยใช้เวลาเล่นเกมประมาณ 10,000 ชั่วโมงภายในอายุ 21 ปี นับเป็น 2 เท่า จากเวลาที่เรียนเพื่อให้ได้ปริญญาตรี มีหลักฐานพบว่า การเปิดรับวิดีโอเกมเพียง 10-20 ชม. สามารถเพิ่มประสิทธิภาพด้านความสนใจและการรับรู้ เช่นเดียวกับ งานที่ควบคุม บริหาร ข้อสมมติฐานพื้นฐาน สิ่งนี้คือทักษะพื้นฐานที่สามารถนำไปใช้ประโยชน์กับงานที่ไม่ได้รับผลจากการเพิ่มประสิทธิภาพนี้ เมื่อเปรียบเทียบกับการเรียนรู้ทั่วไป การฝึกอบรมด้วยวิดีโอเกมนั้นสีส่วนกระตุ้นให้เกิดกรรรับรู้ แต่การศึกษาสิ่งนี้ก็ไม่ได้ประสบความสำเร็จทั้งหมด เมื่อเร็วๆนี้มีการวิพากษ์วิจารณ์ข้อบงพร่องมรการรับรู้นี้หลายส่วน แต่เมื่อถึงข้อสรุปแล้วการฝึก อบรมด้วยวิดีโอเกมนั้นก็ถือว่าเป็นเทคนิคที่ดีได้อีกอย่างหนึ่งจากไม่กี่อย่างที่แสดงให้แห็นผลได้นอกจากฝึกทั่วไปแบบอื่นๆ
                        </h5>
                        <br></br>
                        <h5>
                        น่าแปลกที่การศึกษา สำรวจความสัมพันธ์ของการทำงานและโครงสร้างของประสาทจากการเล่นวิดีโอเกมนั้น บ่อยครั้งเป็นไปได้ยาก แต่เมื่อเร็วๆนี้เราได้รวบรวมข้อมูล ในกลุ่มวัยรุ่นที่เราตรวจสอบแบบสัณฐานวิทยาของสมอง มีความสัมพันนธ์กับจำนวนของการเล่นวิดีโอเกมในปัจจุบัน เราพบปริมาณสสารสีเทา (GM) มากขึ้นใน Striatum ด้านซ้าย (มากกว่า 9 ชั่วโมงต่อสัปดาห์) เมื่อเทียบกับผู้เล่นที่เล่นวิดีโอเกมไม่บ่อยนีก (น้อยกว่า 9 ชั่วโมงต่อสัปดาห์) จากการศึกษาในผู้ใหญ่เพศชาย เราสังเกตุเห็นความสัมพันธ์เชิงบวกของ Hippocampal (HC) สิ่งที่น่าสนใจเลยคือ ปริมาณ GM สูงขึ้นอย่างมีนัยสำคัญ ส่วนมากเป็นผู้เล่นที่สนใจเกม (Super Mario 64, Commander Keen, Sonic และ Mega Ma และเกมลอจิก ปริศนา Tetris, Minesweeper และ Professor Layton) ซึ่งประเมินจากผู้ที่เข้าร่วมจากปริมาณที่เพิ่มขึ้นของสสารสีเทา (GM) อย่างไรก็ตาม ยังตัดสินไม่ได้จากความแตกต่างของโครงสร้างที่สังเกตุเห็นว่า โครงสร้างนั้นแตกต่างจากปกติอยู่แล้วหรือไม่ 
                        </h5>
                        <br></br>
                        <h5>
                        ดังนั้นจึงมีการตรวจสอบระยะยาว เกี่ยวกับการเปลี่ยนแปลงโครงสร้างและการดัดแปลงสมอง จากการถ่ายภาพด้วยคลื่นแม่เหล็ก การศึกษาครั้งนี้นั้น รายงานการเปลี่ยนแปลงแบบ Morphometry (voxel) (VBM) ก่อนและหลังจาก 3 เดือนให้หลังของการฝึกอื่นๆ ที่มุ่งเน้นไปในการแทรกแซงต่างๆ เช่นการออกกำลังกายแอโรบิค เพื่อสอบการจำและการฝึกด้านภาษา 
                        </h5>
                        <br></br>
                        <h5>
                        เราตั้งทฤษฏีว่า วิดีโอเกมนั้นมีส่วนประกอบในการนำทางที่โดดเด่น นั้นคือความจำเป็นในการปรับทิศทางในสภาพแวดล้อมสามมิติและความต้องการเชิงกลยุทธ์จะมีผลกระทบในการวัดพื้นที่สมองส่วนกระบวนการทางปัญญา เพิ่อทดสอบการเปลี่ยนแปลงโครงสร้างหลังจากผ่านไป 2 เดือนของการฝึกวิดีโอเกมทุกวัน ทั้ง เกมแนวผจญภัย และแนวแอคชั่น การใช้มุมมองแบบบุคคลที่ 1 นั้นอาจปรับปรุงกลยุทธ์เพื่อใช้ในการประมวลผลที่เกี่ยวข้องแบบ caudate ในขณะที่มุมมองแบบมุมมองนกอาจช่วยให้เกิดกลยุทธ์ในการจัดสรรที่แสดงให้เห็นว่าต้องพึ่งพาการกระตุ้น Hippocampal (HC) มากขึ้น 
                        </h5>
                        <br></br>
                        <h3><b>การวิเคราะห์ข้อมูล</b></h3>
                        <br></br>
                        <h5>
                        ผู้เข้าร่วมเป็นผู้ที่มีสุขภาพดีทั้ง 48 คน (Mean = 24.1, SD = 3.8) ได้รับการคัดเลือกจากโฆษณาทางหนังสือพิมพ์และอินเตอร์เน็ต ผู้เข้าร่วมนั้นยินยอมเป็นลายลักษณือักษรผู้เข้าร่วมมีความผิดปกติทางจิต แต่ได้รับการยกเว้น ทั้งการถ่ายภาพด้วยคลื่นแม่เหล็ก ความผิดปกติทางการแพทย์ทั่วไป และโรคทางระบบประสาท ผู้เข้าร่วมนั้น รสยงานว่า การเล่นวิดีโอเกมนั้นมีน้อยจนถึงไม่มีเลยในช่วงเวลา 6 เดือน นอกจากนี้ผู้เข้าร่วมยังได้รับค่าตอบแทนทางการเงินสำหรับการทดสอบ แต่ไม่ใช่วิดีโอเกม
                        </h5>
                        <br></br>
                        <h5>
                        ผู้เข้าร่วมนั้นได้รับการสุ่มเป็น กลุ่มผึกกับวิดีโอเกมและกลุ่มที่ควบคุมให้อยู่เฉยๆ เป็นหญิง 17 คน และชาย 6 คน ได้รับคำสั่งให้เล่นวิดีโอเกม Super Mario 64 บน Nintendo Dual Screen แบบพกพา อย่างน้อย 30 นาที ต่อวัน เป็นเวลา 2 เดือน Super Mario 64 นั้น ครึ่งบนแรกของจอจะเป็นการเคลื่อนที่ผ่านสภาพแวดล้อมที่อิสระ สามารถเก็บดาว แก้ปริศนาหรือเอาชนะศัตรูได้อย่างแม่นยำเพื่อให้สามารถไปสู่ระดับที่สูงขึ้น โดยสภาพแวดล้อมจะเป็นมุมมองบุคคลที่ 3 (ด้านหลังตัวละคร) ครึ่งล่างของวิดีโอเกมนั้น จะแสดงแผนที่เป็นมุมมองตานกช่วยใหสามารถปรับทิศทางและรู้ตำแหน่งของดาวในด่าน ผู้เข้าร่วมได้รับการศึกษาวิธีการเล่นและกฏกติกาที่ได้มาตราฐานก่อนเข้าร่วม
                        </h5>
                        <br></br>
                <Card>
                <Container>
                    <Row>
                        <Col>
                        <CardImg top width="1%" src="T2001.jpg" alt="..." />
                        <br></br>
                        <h6>สกรีนช็อตจากวิดีโอเกมฝึกที่ platformer (Super Mario 64)</h6>
                        </Col>
                        
                    </Row>
                </Container>
                </Card>
                <br></br>
                <h5>
                    กลุ่มที่ควบคุมให้อยู่เฉย เป็นหญิง 17 คน และชาย 8 คน ไม่มีภาระงานใดๆเป็นงานเฉพาะ แต่ได้รับการผ่านการทดสอบเดียวกับกลุ่มที่แยกกัน 2 เดือน
                </h5>
                <br></br>
                <h5>
                ในการสแกน ภาพโครงสร้างนั้น ถูกรวบรวมไว้ในเครื่องสแกนซีเมนส์ Tim Trio 3T และใช้มาตราฐาน 12 ช่อง ภาพโครงสร้างได้มาจากการใช้แม่เหล็กสามมิติบนพื้นฐานโปรโตคอล ADNI
                </h5>
                <br></br>
                <h5>
                ในช่วงระยะเวลาการฝึกอบรมผู้เข้าร่วมจะต้องบันทึกชั่วโมงการเล่นเกมรายวันและจำนวนหรือรางวัลที่เกี่ยวข้องกับเกม (ดาว) ที่ได้รับในแต่ละวันในแบบสอบถามรายสัปดาห์  นอกจากนี้ยังมีการให้คะแนนความสนใจและความคิดเกี่ยวกับวิดีโอเกมที่พวกเขามี
                </h5>
                <br></br>
                <h5>
                ก่อนและหลังขั้นตอนการทดสอบและกลุ่มควบคุม ได้รับการทดสอบสมรรถภาพทางปัญญาหลายอย่าง ผู้เข้าร่วมจะได้เห็นการกระจัดกระจายของภาพที่พวกเขาต้องระบุ จุดเริ่มต้นที่จะมีต้องรับุการกระจัดกระจายในตอนท้าย ในการตรวจสอบผู้เข้าร่วมเราเรียกว่า ‘เทอร์เนอร์’ 
                </h5>
                <br></br>
                <h5>
                โครงสร้างถูกประมวลผลโดยกล่องเครื่องมือ VBM8 เกี่ยวข้องเกี่ยวกับการแก้ไขการจำแนกเนื้อเยื่อและการเลียนแบบ GM เลียนแบบสสารสีขาวถูกนำมาเพื่อเพลต DARTEL (diffeomorphic anatomical registration through exponentiated lie algebra) จากการเปลี่ยนแปลงของ GM และเซ้กเมนต์ขาวที่ถูกสร้างขึ้น นำไปใชเพื่อการรักษาของเนื้อเยื่อเฉพาะภายใน voxel โดยการคูณค่า voxel ในภาพที่แบ่งออกเป็นส่วนๆ 
                </h5>
                <br></br>
                <h5>
                การคำนวนความสัมพันธ์ระหว่างปริมาณ GM ที่สกัดจากกลุ่มที่สำคัญในการวิเคราะห์ VBM ด้วยค่าเฉลี่ยที่ต้องการรายงานเพื่อใช้เล่นวิดีโอเกมและอัตราส่วนความไร้เห็ตและผล การเปรียบเทียบระหว่างสัมประสิทธิ์และสหสัมพันธ์ถูกคำนวนโดยใช้ตัวแปลง r ถึง Z กับการเปรียบเทียบกลุ่มกับการทดสอบ
                </h5>
                <br></br>
                <h3>
                            <b>สรุปผล</b>
                        </h3>
                        <br></br>
                <h5>
                โดยเฉลี่ยผู้เข้าร่วมเล่นวิดีโอเกม 50.2 ชั่วโมง (sd = 14.6) ต่อวัน และได้รับดาว 74.7 (sd = 37.4)
เมื่อคำนวนการวิเคราะห์สมองทั้งสมองเกี่ยวกับปริมาณ GM ค้นหาในกลุ่มที่แสดงการ เราพบว่ามี ปฏิสัมพันธ์ที่สำคัญในด้านขวาของ HC (26, 21, 21, 21), ขวา dorsolateral prefrontal cortex (DLPFC, Montreal Neurological) พิกัดของสถาบัน: 52, 39, 25) และ cerebellum spanning lobules IV, V และ VI bilaterally ทั้งสองข้าง (−6, −49, −23) การทดสอบหลังเราพบว่าปริมาณ GM ใน DLPFC เพิ่มขึ้นอย่างชัดเจนในกลุ่มที่ได้รับการทดสอบ t(46) = 2.31 และมีความแตกต่างอย่างมีนัยสำคัญระหว่าง 2 ที่ได้รับการทดสอบ t(46) = 2.28,  นอกจากนี้ HC t(46) = 2.95, และ cerebellum, t(46) = 2.11 มีความแตกต่างอย่างมีนัยสำคัญ ด้วยเกณฑ์การผ่อนปรนที่มากขึ้นเพื่อแก้ไขข้อผิดพลาดในครอบครัวที่ฉลาด
                </h5>
                <br></br>
                <Card>
                <Container>
                    <Row>
                        <Col>
                        <CardImg top width="1%" src="T2002.jpg" alt="..." />
                        <br></br>
                        <h6>พื้นที่แสดงการทำงานร่วมกันเป็นกลุ่ม ในปริมาณสสารสีเทาของที่งสองกลุ่ม </h6>
                        </Col>
                        
                    </Row>
                </Container>
                </Card>
                <br></br>
                <h5>
                พื้นฐานที่ว่า HC มีส่วนในการสำรวจแบบกระจายตัวในขณะที่วางแผนที่เป็นศูนย์กลางที่มีความเกี่ยวข้องอย่างมากในการแสดงผลแบบ caudate กลยุทธ์การนำทางของผู้เข้าร่วมถูกนำไปวิเคราะห์เพิ่มเติม ในการทดสอบเราพบความสัมพันธ์เชิงลบระหว่างกลยุทธ์ในการวางแนว และการเปลี่ยนแปลง HC , r (22) = -44 แสดงให้เห็นว่า การเปลี่ยนแปลงกลยุทธ์การจัดสรร สัมพันธ์เกี่ยวข้องกับการเติบโตของ HC ที่มากขึ้น ในกลุ่มที่ควบคุมกลับกัน ไม่พบความสัมพันธ์ที่เป็นนัยสำคัญ r (24) = 0.16
                </h5>
                <br></br>
                <Card>
                <Container>
                    <Row>
                        <Col>
                        <CardImg top width="1%" src="T2003.jpg" alt="..." />
                        <br></br>
                        <h6>พล็อตแบบกระจายของการเปลี่ยนแปลงปริมาณสสารสีเทา ในการก่อตัวของฮิปโปแคมปัส (HC) และการเปลี่ยนแปลงของอัตราการวางแนวที่เป็นศูนย์ เมื่อเปรียบเทียบระหว่างก่อนและหลังการทดสอบ </h6>
                        </Col>
                        
                    </Row>
                </Container>
                </Card>
                <br></br>
                <h5>
                การเปลี่ยนแปลงของ GM ใน DLPFC และ HC ของกลุ่มทดสอบพบว่ามีความสัมพันธ์เชิงบวกกับความสนใจที่จะรายงานตนเองโดยเฉลี่ยการเล่นวิดีโอเกม DLPFC: r (20) = 0.66, P  HC: r (20) = 0.46,  อย่างไรก็ตามกับไม่ใช่กับ cerebellum r(20) = 0.37  ในการสำรวจสมมติ เราคำนวนความสนใจที่รายงานด้วยตนเองเพื่อแยกต่างหากสำหรับเดือนแรกและเดือนที่ 2 ในช่วงเดือนแรกมีความสัมพันธ์ของ GM ใน DLPFC นั้นแข็งแรงกว่าในช่วงเดือนที่ 2 ช่วงแรก r(20) = 0.72 เดือนที่ 2 r(20) = 0.43, P = .057 สัมประสิทธิ์สหสัมพันธ์ของทั้ง 2 มีความสัมพันธ์กันรอย่างมีนัยสำคัญ Meng -Z = 2.31 รูปแบบของผลลัพธ์นี้แสดงให้เห็นว่าการเติบโตของ DLPFC นั้นไม่น่านำไปสู่ความต้องการที่เพิ่มขึ้น ส่วนการวิเคราะห์แยกต่างหาก HC นั้น ทั้ง 2 เดือนยังไม่ได้รับการเปิดเผยความสัมพันธ์ใดๆ ที่มีความแตกต่างกันอย่างชัดเจน
                </h5>
                <br></br>
                <Card>
                <Container>
                    <Row>
                        <Col>
                        <CardImg top width="1%" src="T2004.jpg" alt="..." />
                        <br></br>
                        <h6>พล็อตแบบกระจายของการเปลี่ยนแปลงปริมาณสสารสีเทา ในการก่อตัวของฮิปโปแคมปัส (HC) ภาพด้านซ้าย และdorsolateral prefrontal cortex (DLPFC) ภาพด้านขวา</h6>
                        </Col>
                        
                    </Row>
                </Container>
                </Card>
                <br></br>
                <h3><b>สนทนา</b></h3>
                        <br></br>
                <h5>
                เราตรวจสอบการเปลี่ยนแปลงโครงสร้างประสาทที่เกิดจากการเปลี่ยนแปลงจากการทดสอบการเล่นวิดีโอเกม Super Mario 64 โดยเริ่มตั้งแต่ยังไม่เข้าใจในตัวเกม เป็นเวลา 2 เดือน อย่างน้อยวันละ 30 นาทต่อวัน 
                </h5>
                <br></br>
                <h5>
                เมื่อเปรียบเทียบการเปลี่ยนแปลงปริมาณ GM ทั้งก่อนและหลังการทดสอบ และระหว่างกลุ่มทดสอบและกลุ่มควบคุมพบว่ามีผลกระทบอย่างมีนัยสำคัญใน HC ขวา DLPFC ขวา และ cerebellum ความสัมันธ์ส่วนใหญ่ที่สำรวจได้นั้น เกิดจากการเพิ่มขึ้นของ GM ในกลุ่มทดสอบและมีแนวโน้วการหดตัวในกลุ่มควบคุม แนวโน้วการลดลงปริมาณนี้ ยังอยู่ในช่วงการประมาณการที่อาจเกี่ยวข้องกับอายุ


                </h5>
                <br></br>
                <h5>
                ปริมาณการเพิ่มขึ้นของ HC ที่ถูกต้องของกลุ่มทดสอบนั้น มีความสัมพันธ์กับการเปลี่ยนแปลงจากกลยุทธ์ egocentric เป็นแบบ allocentric แต่นี่ไม่ใช่กับกรณีของกลุ่มควบคุม ผู้เข้าร่วมที่มีในการจัดอันดับประจำสัปดาห์นั้นๆ มีความสัมพันธ์ทั้งความต้องการในการเล่นวิดีโอเกมกับ การเพิ่มขึ้นของ GM ใน HC และ DLPFC เมื่อเชื่อมโยงกันแล้ว มีการเติบโตมากขึ้นที่สุดในเดือนแรก เมื่อเทียบกับเดือนที่ 2 ชี้ให้เห็นว่าความต้องการในการเล่นเกมนั้น นำไปสู่การเติบโตที่เพิ่มมากขึ้น ใน DLPFC ในทางกลับกันกับความต้องการ
                </h5>
                <br></br>
                <h5>
                กลยุทธ์ Allocentric ได้รับการพิสูจน์ว่า มีส่วนกับสมองส่วน ฮิปโปแคมปัส (HC) การศึกษา neuroimaging มีการทำงานโดยใช้กลยุทธ์นี้ ในส่วนที่เปิดใช้อย่างแข็งแรงมากที่สุดใน ส่วน parahippocampal, the hippocampus, thalamus and the cerebellum มีการสันนิฐานว่า ในตอนแรก ภาพแรกที่เป็น egocentric มีการสลายไปอย่างรวดเร็ว เมื่อมีการใช้กลยุทธ์แบบ Allocentric เปฌนการจัดสรรที่มั่นคงยิ่งขึ้น ผู้สูงอายุมักชอบใช้กลยทธ์แบบ egocentric ในขณะผู้ที่มีอายุน้อยนั้น มีการกระจายในการใช้ egocentric  และ Allocentric ได้อย่างเท่าเทียมกัน นอกจากนี้ยังพบว่า Allocentric ยังเป็นกลยุทธ์ที่มีประโยชน์อย่างมากต้อการประเมินการนำทางอิสระในเด็กที่มีอายุน้อยกว่า
                </h5>
                <br></br>
                <h5>
                เยื่อหุ้มสมองส่วนหน้า DLPFC การเพิ่มขึ้นนั้นมีผลต่อการเล่นวิดีโอเกม อาจมีส่วนในการทำงานของหน่วยความจำที่หลากหลาย นั้นรวมถึงหน่วยความจำที่ทำงานเกี่ยวกับความยืดหยุ่นในพฤติกรรม โดยเฉพาะอย่างยิ่ง DLPFC นั้นมีผลกระทบกับส่วนอื่นๆ ของเยื่อหุ้มสมองส่วนหน้าและสามารถแสดงข้อมูลที่หลากหลายประเภทตั้งแต่ข้อมูลเชิงวัตถุและข้อมูลเชิงพื่นที่ไปจนถึงการตอบสนองถึงผลตอบแทน รางวัลที่จะได้ และกลยุทธ์ทีกำลังดำเนินการอยู่นั้น ดังนั้น DLPFC จึงได้รับการพิจารณาให้เป็นส่วนสำคุญในการบำรุงและบูรณาการข้อมูลทางประสาทสัมผัส 
                </h5>
                <br></br>
                <h5>
                การเพิ่มขึ้นของ GM ใน DLPFC ของกลุ่มทดสอบนั้น อาจเป็นการสะท้อนให้เห็นถึงกระบวนการที่เกิดจากการออกกำลังกายกับกระบวนการความรู้ที่อยู่ใน DLPFC 
                </h5>
                <br></br>
                <a href="https://www.nature.com/articles/mp2013120">อ่านต้นฉบับ</a>
                </Col>
                    </Row>
                </Container>
            </div>
        
        )
    }
}
